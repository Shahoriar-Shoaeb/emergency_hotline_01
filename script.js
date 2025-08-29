const totalHearts = document.getElementById("total_hearts")
const hearts = document.getElementsByClassName("heart_count")
for(const heart of hearts){
    heart.addEventListener("click",function(){
        // console.log("Heart clicked")
        let totalHeartsValue = parseInt(totalHearts.innerText);
        totalHeartsValue++;
        totalHearts.innerText = totalHeartsValue
        // console.log(totalHeartsValue)
    })
}
const totalCoins = document.getElementById("total_coin")
const calls = document.getElementsByClassName("call")
for(const calling of calls){
    calling.addEventListener("click", function(){
        alert("You are calling:\n"+calling.parentElement.parentElement.firstElementChild.innerText+"( "+calling.parentElement.parentElement.children[2].innerText+" )");
        let totalCoinsValue = parseInt(totalCoins.innerText);
        
        if(totalCoinsValue<20){
            alert("You don't have enough coins to make a call. Please recharge your coins.");
            return;
        }
        totalCoinsValue = totalCoinsValue-20;
        totalCoins.innerText = totalCoinsValue

        const callHistoryContainer = document.getElementById("call_history")
        const div = document.createElement("div")
        div.innerHTML =`
                <div id="aside_bar_new">
                    <div class="aside_bar_new_sub hind_madurai_font">
                        <p class="inter_font aside_bar_new_sub_title">${calling.parentElement.parentElement.firstElementChild.innerText}</p>
                        <p class="aside_bar_new_sub_sub_title">${calling.parentElement.parentElement.children[2].innerText}</p>
                    </div>
                    <div class="aside_bar_time hind_madurai_font">${new Date().toLocaleTimeString()}</div> 
                </div>
                `
        callHistoryContainer.appendChild(div)
    })   
}

const clearHistoryBtn = document.getElementById("clear_btn")
clearHistoryBtn.addEventListener("click",function(){
    // console.log("clicked")
    clearHistoryBtn.parentElement.parentElement.children[1].innerHTML = ""
    // console.log("cleared")

})

const copyCount = document.getElementById("copy_count")
const copyBtns = document.getElementsByClassName("card_button_copy")
for(const copy of copyBtns){
    // console.log("copied")
    copy.addEventListener("click",function(){
        let copyCountValue = parseInt(copyCount.innerText);
        copyCountValue++;
        copyCount.innerText = copyCountValue
        // console.log(copyCountValue)
    })
}

const hotlineNumbers = document.getElementsByClassName("card_phone_number")
for(const number of hotlineNumbers){
    number.addEventListener("click",function(){
        navigator.clipboard.writeText(number.innerText);
        alert("Phone number copied to clipboard:\n"+number.innerText);
    })
}