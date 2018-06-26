$(function(){
  $("#js-login-btn").click(function() {
    var arr = $('#js-form').serializeArray()
    var temp = 0;
    var obj = {}
    arr.forEach(function (v, i) {
      obj[v.name] = v.value
      if(v.value === "") {
        temp++;
      }
    })
    if(temp > 0) {
      alert('参数不可为空')
    } else {
      $.ajax({
        url: '/user/login',
        method: 'POST',
        headers:{
          "content-type":"application/json"
        },
        data: JSON.stringify(obj),
        success: function(data) {
          if(data.code === 200 ) {
            location.href="/manage"
          } else {
            alert('提交失败')
          }
          return false
        }
      })
    }
    
  })
})
