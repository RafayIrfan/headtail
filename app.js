var head = prompt("Player name of head?")
        var tail = prompt("Player name of tail?")

        var toss = Math.floor(Math.random() * 2)

        if(toss == 1){
            console.log(head + " won the toss")
        } else if(toss == 0){
            console.log(tail + " won the toss")
        }
        