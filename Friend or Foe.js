/*******************DESCRIPTION****************************/
/*
 Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] 
*/

function friend(friends) {
    //your code here
    const myFriends = []
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            myFriends.push(friends[i])
        }
    }
    return console.log(myFriends)
}

friend(["Ryan", "Kieran", "Mark"])// ["Ryan", "Mark"])
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])// ["Ryan"])
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])// ["Jimm", "Cari", "aret"])
friend(["Love", "Your", "Face", "1"])// ["Love", "Your", "Face"])