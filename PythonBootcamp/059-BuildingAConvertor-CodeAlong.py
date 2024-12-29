print("How many km do you go?")
distance_in_km = input()
distance_in_mil = float(distance_in_km) / 1.60934

print(f"You have run in {round(distance_in_mil,2)} miles")