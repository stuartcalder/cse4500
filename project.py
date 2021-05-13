# Copyright Stuart Calder 2021 (Python3)
import requests

LATITUDE  = '21.4859403'
LONGITUDE = '84.2839405'

URL = 'https://api.sunrise-sunset.org/json?lat=' + LATITUDE + '&lng=' + LONGITUDE + '&date=today'

response = requests.get(url = URL)
j = response.json()

print('response is of type', type(response))
print('j is of type', type(j))
print('the json looks like this:')
print(j)
