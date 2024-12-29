import random as rnd
set_game1 = True

while set_game1:
    player1 = input("Enter Player 1 Choice (Rock/Paper/Scissors): ").lower()
    if(player1 == "rock" or player1 == "paper" or player1 == "scissors"):
        set_game1 = False
    else:
        set_game1 = True

i = 0
while i < 10:
    print("No Cheating Please . . . \n")
    i = i + 1

choice2 = ["paper","rock","scissors"]
player2 = choice2[rnd.randint(0,2)]


if(player1 == player2):
    print(f"Player 1 Choice is {player1}\nPlayer 2 Choice is {player2}\nResult: Draw!")
elif(player1 == "paper" and player2 == "scissors"):
    print(f"Player 1 Choice is {player1}\nPlayer 2 Choice is {player2}\nResult: Player 2 Wins!")
elif(player1 == "paper" and player2 == "rock"):
    print(f"Player 1 Choice is {player1}\nPlayer 2 Choice is {player2}\nResult: Player 1 Wins!")
elif(player1 == "scissors" and player2 == "paper"):
    print(f"Player 1 Choice is {player1}\nPlayer 2 Choice is {player2}\nResult: Player 1 Wins!")
elif(player1 == "scissors" and player2 == "rock"):
    print(f"Player 1 Choice is {player1}\nPlayer 2 Choice is {player2}\nResult: Player 2 Wins!")
elif(player1 == "rock" and player2 == "scissors"):
    print(f"Player 1 Choice is {player1}\nPlayer 2 Choice is {player2}\nResult: Player 1 Wins!")
elif(player1 == "rock" and player2 == "paper"):
    print(f"Player 1 Choice is {player1}\nPlayer 2 Choice is {player2}\nResult: Player 2 Wins!")        
            
