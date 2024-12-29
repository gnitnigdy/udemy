for nums in range(1,21):
    if(nums == 4 or nums == 13):
        print(f"{nums} is UNLUCKY")
    elif(nums%2 == 0):
        print(f"{nums} is Even")
    elif(nums%2 != 0):
        print(f"{nums} is Odd")