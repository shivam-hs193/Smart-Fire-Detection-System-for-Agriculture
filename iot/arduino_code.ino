int tempPin = A0;
int smokePin = A1;
int flamePin = 7;
int sprinklerPin = 9;

void setup() {
  Serial.begin(9600);
  pinMode(flamePin, INPUT);
  pinMode(sprinklerPin, OUTPUT);
}

void loop() {
  int temp = analogRead(tempPin);
  int smoke = analogRead(smokePin);
  int flame = digitalRead(flamePin);

  Serial.print("T:"); Serial.print(temp);
  Serial.print(",S:"); Serial.print(smoke);
  Serial.print(",F:"); Serial.println(flame);

  if (temp > 500 || smoke > 600 || flame == 1) {
    digitalWrite(sprinklerPin, HIGH);
  } else {
    digitalWrite(sprinklerPin, LOW);
  }

  delay(2000);
}
