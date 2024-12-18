function sendCouponToDecemberBirthdays(customers) {
  customers.forEach(function(customer) {
    const month = customer.birthday.split("/")[0]; // 생일에서 월 추출
    if (month === "12") { 
      console.log(`${customer.name}님 12월 생일 쿠폰이 도착하였습니다!`);
    }
  });
}
