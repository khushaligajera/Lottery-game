let num_container = document.getElementsByClassName("num_container")
let container = document.getElementById("container")
let numbers = document.getElementsByClassName("numbers")
let redrawn_btn = document.getElementById("redrawn_btn")
let frontPage = document.getElementById("frontPage")
let drawn_btn = document.getElementById("drawn");
let number = document.getElementById("number")
let winner = document.getElementById("winner")
let removelist;
console.log(removelist);
console.log(winner);

var func_A = 0
var func_B = 0
var func_C = 0
var func_D = 0


let selected_num_arr = []
let parent_div;
let childDiv_span;
let child_div
let parentDiv_span;
let h3
let grandParent_div;
let selected_num_arr_2 = []
let parent_div_2;
let child_div_2
let childDiv_span_2;
let parentDiv_span_2;
let h3_2
let grandParent_div_2;

let selected_num_arr_3 = []
let parent_div_3;
let childDiv_span_3;
let child_div_3
let parentDiv_span_3;
let h3_3
let grandParent_div_3;


let rupeeA = 100;
let rupeeB = 100;
let rupeeC = 100;
let rupeeD = 100;
let randomdraw;
let totalrestnum = [];

let invested_RupeeA
let invested_RupeeB
let invested_RupeeC
let invested_RupeeD
let total_invest;
let selected_num_arr_4 = []
let parent_div_4;
let childDiv_span_4;
let child_div_4
let parentDiv_span_4;
let h3_4
let grandParent_div_4;
let clicked;
let second = 0;
let valstore;
let btn_userA = document.getElementById("userA_btn")
console.log(btn_userA);
grandParent_div = document.createElement("div");
h3 = document.createElement("h3")
parent_div = document.createElement("div")
parentDiv_span = document.createElement("span")
child_div = document.createElement("div")



// grandParent_div_2 = document.createElement("div");
h3_2 = document.createElement("h3")
parent_div_2 = document.createElement("div")
parentDiv_span_2 = document.createElement("span")
child_div_2 = document.createElement("div")



// grandParent_div_3 = document.createElement("div");
h3_3 = document.createElement("h3")
parent_div_3 = document.createElement("div")
parentDiv_span_3 = document.createElement("span")
child_div_3 = document.createElement("div")



// grandParent_div_4 = document.createElement("div");
h3_4 = document.createElement("h3")
parent_div_4 = document.createElement("div")
parentDiv_span_4 = document.createElement("span")
child_div_4 = document.createElement("div")
container.appendChild(grandParent_div)
array_num = Array.from(numbers)

let spanA;
let spanB
let spanC
let spanD
spanA = document.getElementById("selectedNum_a")
spanB = document.getElementById("selectedNum_b")
spanC = document.getElementById("selectedNum_c")
spanD = document.getElementById("selectedNum_d")



function usersFunction(grandParentDiv, parentDiv, childDiv, balance, userId, heading, userName, numberArr, childDivSpan, parentDivSpan, func_user, span) {
    // clicked=true;
    // console.log(clicked);


    grandParentDiv.appendChild(parentDiv)
    grandParentDiv.classList.add("user_container")
    grandParentDiv.setAttribute("id", "cont")
    parentDiv.classList.add("users")
    parentDiv.setAttribute("id", userId);

    parentDiv.appendChild(heading)
    parentDiv.appendChild(parentDivSpan)
    parentDivSpan.classList.add("balances")

    parentDivSpan.setAttribute("id", balance)
    parentDiv.appendChild(childDiv)

    heading.innerHTML = `selected numbers by ${userName}`

    console.log("clicked");


    if (func_user == 1) {
        func_A = 1
        func_B = 0;
        func_C = 0;
        func_D = 0;
        parentDivSpan.innerHTML = `&#8377;=${rupeeA}`
    }
    if (func_user == 2) {
        func_B = 1
        func_A = 0
        // func_B=0;
        func_C = 0;
        func_D = 0;
        parentDivSpan.innerHTML = `&#8377;=${rupeeB}`

    }
    if (func_user == 3) {
        func_C = 1
        func_A = 0
        func_B = 0;
        // func_C=0;
        func_D = 0;
        parentDivSpan.innerHTML = `&#8377;=${rupeeC}`

    }
    if (func_user == 4) {
        func_D = 1
        func_A = 0
        func_B = 0;
        func_C = 0;
        parentDivSpan.innerHTML = `&#8377;=${rupeeD}`
        // func_D=0;

    }
    // console.log(func_change.func_A);
    console.log(func_user);

    // btn_userA.disabled = true;

}

// console.log("come inside");
array_num.forEach(number => {
    number.addEventListener("click", function user_func(event) {
        if (func_A == 1) {
            handleNumber(event, grandParent_div, parent_div, child_div, `userA_balance`, "user_A", h3, `user A`, selected_num_arr, childDiv_span, parentDiv_span, "selectedNum_a", spanA)
            // func_A = 0;
        }


    }

        // },function userB_func(event){
        //     handleNumber(event, grandParent_div, parent_div, child_div, `userA_balance`, "user_A", h3, `user A`, selected_num_arr, childDiv_span, parentDiv_span)   
        // }
    )

    console.log(func_A);
})




array_num.forEach(number => {
    number.addEventListener("click", function user_func(event) {
        if (func_B == 1) {
    
            handleNumber(event, grandParent_div, parent_div_2, child_div_2, `userB_balance`, `user_B`, h3_2, `user B`, selected_num_arr_2, childDiv_span_2
                , parentDiv_span_2, "selectedNum_b", spanB)
            // func_B = 0;
        }



    }
    )

    console.log(func_B);

})





array_num.forEach(number => {
    number.addEventListener("click", function user_func(event) {
        if (func_C == 1) {
            handleNumber(event, grandParent_div, parent_div_3, child_div_3, `userC_balance`, `user_C`, h3_3, `user C`, selected_num_arr_3, childDiv_span_3
                , parentDiv_span_3, "selectedNum_c", spanC)
            // func_C = 0;
        }
    }
    )

    console.log(func_C);

})



array_num.forEach(number => {
    number.addEventListener("click", function user_func(event) {
        if (func_D == 1) {
            handleNumber(event, grandParent_div, parent_div_4, child_div_4, `userD_balance`, `user_D`, h3_4, `user D`, selected_num_arr_4, childDiv_span_4, parentDiv_span_4, "selectedNum_d", spanD)
            // func_D = 0;
        }
    }
    )

    console.log(func_D);

})

function handleNumber(event, grandParentDiv, parentDiv, childDiv, balance, userId, heading, userName, numberArr, childDivSpan, parentDivSpan, selectednumber, span) {
  
    if (childDiv.children.length > 7) {
        console.log("come");
    }

    else {
        if (event.target.classList.contains("color") == false) {
            event.target.classList.add("color")
            console.log(func_A)
            if (func_A == 1) {
                rupeeA -= 10;
                console.log(rupeeA);
                parentDivSpan.innerHTML = `&#8377;=${rupeeA}`
            }


            if (func_B == 1) {
                rupeeB -= 10;
                console.log(rupeeB);
                parentDivSpan.innerHTML = `&#8377;=${rupeeB}`
            }


            if (func_C == 1) {
                rupeeC -= 10;
                console.log(rupeeC);
                parentDivSpan.innerHTML = `&#8377;=${rupeeC}`
            }

            if (func_D == 1) {
                // console.log(rupeeD);
                rupeeD -= 10;
                console.log(rupeeD);
                parentDivSpan.innerHTML = `&#8377;=${rupeeD}`
            }
            console.log("not added");
            console.log(childDiv);
            console.log(childDivSpan);
            childDivSpan = document.createElement("span")
            childDiv.appendChild(childDivSpan)
            childDivSpan.innerHTML = event.target.innerHTML
            numberArr.push(event.target.innerHTML)
            console.log(childDivSpan);
            childDiv.classList.add("selected_num")
            childDiv.setAttribute("id", selectednumber)
            childDivSpan.classList.add("selected")
            console.log(parentDiv.children.length);
            console.log(numberArr);
        }
    }
}

drawn_btn.addEventListener("click", () => {
    console.log("click");
    frontPage.style.display = "block"
    totalrestnum = selected_num_arr.concat(selected_num_arr_2, selected_num_arr_3, selected_num_arr_4)
    console.log(totalrestnum);
    console.log(totalrestnum.length);
    randomdraw = Math.floor(Math.random() * totalrestnum.length);
    //   console.log(totalrestnum[randomdraw])
    number.innerHTML = `THE NUMBER IS ${totalrestnum[randomdraw]}`
    console.log(selected_num_arr);
    console.log(selected_num_arr_2);
    console.log(selected_num_arr_3);
    console.log(selected_num_arr_4);


    invested_RupeeA = 100 - rupeeA
    invested_RupeeB = 100 - rupeeB
    invested_RupeeC = 100 - rupeeC
    invested_RupeeD = 100 - rupeeD;
    total_invest = invested_RupeeA + invested_RupeeB + invested_RupeeC + invested_RupeeD
    console.log(total_invest);
    if (selected_num_arr.includes(totalrestnum[randomdraw])) {
        winner.innerHTML = `THE WINNER IS USER A`
        rupeeA += total_invest;
        console.log(rupeeA);
    }

    if (selected_num_arr_2.includes(totalrestnum[randomdraw])) {
        winner.innerHTML = `THE WINNER IS USER B`
        rupeeB += total_invest;
        console.log(rupeeB);

    }

    if (selected_num_arr_3.includes(totalrestnum[randomdraw])) {
        winner.innerHTML = `THE WINNER IS USER C`
        rupeeC += total_invest;
        console.log(rupeeC);
        
    }


    if (selected_num_arr_4.includes(totalrestnum[randomdraw])) {
        winner.innerHTML = `THE WINNER IS USER D`
        rupeeD += total_invest;
        console.log(rupeeD);
       
    }

    // console.log(restRupeeD)

})
redrawn_btn.addEventListener("click", () => {
    console.log("click");
    frontPage.style.display = "none"
    // location.reload()
    if (second == 0) {
        console.log(spanA)
        spanA=document.getElementById("selectedNum_a")
        spanB=document.getElementById("selectedNum_b")
        spanC=document.getElementById("selectedNum_c")
        spanD=document.getElementById("selectedNum_d")
        console.log(spanA);
console.log(spanA);
        while (spanA.firstChild) {
            spanA.removeChild(spanA.lastChild);
            selected_num_arr=[]
            // numberArr = [];
        }

        while (spanB.firstChild) {
            spanB.removeChild(spanB.lastChild);
            selected_num_arr_2=[]
            // numberArr = [];
        }
        while (spanC.firstChild) {
            spanC.removeChild(spanC.lastChild);
            selected_num_arr_3=[]
            // numberArr = [];
        }
        while (spanD.firstChild) {
            spanD.removeChild(spanD.lastChild);
            selected_num_arr_4=[]
            // numberArr = [];
        }
        second = 1;
    }
    if(second==1){
    removelist = document.getElementById("cont")
    //  var remove_A=document.getElementById("user_A")
    //  console.log(remove_A);
    // removelist.NodeList()
    while (removelist.firstChild) {
        removelist.removeChild(removelist.lastChild);
    }
    second = 0;
    }
    array_num.forEach((number)=>{
      if( number.classList.contains("color") == true) {
           number.classList.remove("color")
      }
    })
  
})

