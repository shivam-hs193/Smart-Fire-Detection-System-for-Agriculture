import serial
import time

gsm = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
gsm.write(b'AT+CMGF=1\r')
time.sleep(1)
gsm.write(b'AT+CMGS="+91XXXXXXXXXX"\r')
time.sleep(1)
gsm.write(b'Fire Detected on Farm!\x1A')
