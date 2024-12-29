import random as rand
game_over_status = True
random_number = rand.randint(1,10)
player_input = int(input("Guess your number from 1 to 10: "))
print(f"Rand number: {random_number}")
while game_over_status:
    if(player_input > random_number):
        print("Too High! Guess another number")
        player_input = int(input("Guess your number from 1 to 10: "))
    elif(player_input < random_number):
        print("Too Low! Guess another number")
        player_input = int(input("Guess your number from 1 to 10: "))
    else:
        print("Correct!")
        game_over_status = False
        restart = input("Do you want to restart ? (y/n)")
        if(restart == "y"):
            game_over_status = True
            random_number = rand.randint(1,10)
            player_input = int(input("Guess your number from 1 to 10: "))
        else:
            break