age = input("How old are you: ")
if age == "":
    print("Enter your age")
else:
    if(int(age) >= 18 and int(age) < 21):
        print("You can enter, but need a wristband!")
    elif(int(age) >= 21):
        print("You can drink all you want without wristband!")
    else:
        print("Too young, i am sorry!")
