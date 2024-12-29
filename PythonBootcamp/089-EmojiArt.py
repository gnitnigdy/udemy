i = 0

#basic solution
while i < 10:
    j = 0
    emo = ""
    while j < i:
        emo += "\U0001f600"
        j += 1
    print(emo)
    i += 1


#refactor solution
x = 0
while x < 10:
    print("\U0001f600" * x)
    x += 1