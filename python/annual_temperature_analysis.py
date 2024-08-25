prompt_line_divider = "_________________________________\n"

print("Informe a temperatura de cada mês em formato inteiro (00) ou float (00.00)")
print(prompt_line_divider)

sum_of_temperatures = 0
amount_of_hot_months = 0

high_temperature = 33
min_valid_temperature = -60
max_valid_temperature = 50

coldest_month = {
  "month": 0,
  "name": "",
  "temperature": 0
}

hottest_month = {
  "month": 0,
  "name": "",
  "temperature": 0
}

months = {
    '1': 'Janeiro',
    '2': 'Fevereiro',
    '3': 'Março',
    '4': 'Abril',
    '5': 'Maio',
    '6': 'Junho',
    '7': 'Julho',
    '8': 'Agosto',
    '9': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro'
}


def updateExtremeMonthData(extremeMonth, month, temperature):
  extremeMonth["month"] = month
  extremeMonth["name"] = months[month]
  extremeMonth["temperature"] = temperature


def updateMonthsTemperatureInfos(month, temperature):
  global sum_of_temperatures
  global amount_of_hot_months

  sum_of_temperatures += temperature
    
  if temperature > high_temperature:
    amount_of_hot_months += 1

  if temperature >= hottest_month["temperature"]:
    updateExtremeMonthData(hottest_month, month, temperature)

  if coldest_month["temperature"] == 0:
    coldest_month["temperature"] = temperature

  if temperature <= coldest_month["temperature"]:
    updateExtremeMonthData(coldest_month, month, temperature)


def getMonthsTemperatureInfos():
  
  for month in months:
    temperature = float(input(f"Temperatura no mês {month}: "))
    isTemperatureValid = temperature > min_valid_temperature and temperature < max_valid_temperature

    while not isTemperatureValid:
      temperature = float(input(f"Temperatura inválida, insira novamente: "))
      isTemperatureValid = temperature > min_valid_temperature and temperature < max_valid_temperature

    updateMonthsTemperatureInfos(month, temperature)
    

def printResults():
  average_temperature = sum_of_temperatures / 12

  print(prompt_line_divider)

  print(f"Temperatura média máxima anual: {average_temperature:.2f}")
  print(f"Quantidade de meses escaldantes: {amount_of_hot_months}")
  print(f"Mês mais escaldante do ano: {hottest_month['name']}")
  print(f"Mês menos quente do ano: {coldest_month['name']}")


getMonthsTemperatureInfos()
printResults()