import configparser
from datetime import datetime
import requests


class SensorData:
    def __init__(self, last_id=0):
        config = configparser.ConfigParser()
        config.read('../config.ini')
        self.url = config['sensorData']['url']
        self.last_id = last_id

    def __makeRequest(self):
        response = requests.get(self.url)
        print(response.status_code)

        if response.status_code != 200:
            raise Exception(response.status_code, response.text)
        return response.json()

    def getData(self) -> list:
        response = self.__makeRequest()
        readings = []
        count = 0

        for reading in response['features']:
            if reading['attributes']['OBJECTID'] > self.last_id:
                count += 1
                date = datetime.strptime(reading['attributes']['SampleDate_t']
                                         .strip(), "%b %d %Y")
                data = {
                    '_id': reading['attributes']['OBJECTID'],
                    'date': date,
                    'location': reading['attributes']['LOCATION'],
                    'abundance': reading["attributes"]['Abundance'],
                    'source': reading['attributes']['Source'],
                    'county': reading['attributes']['County']
                }

                readings.append(data)

        print(f'Added {count} new sensor data samples!')
        return readings
