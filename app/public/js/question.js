$(function(){
  $("#js-push-btn").click(function() {
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
        url: '/question',
        method: 'POST',
        headers:{
          "content-type":"application/json"
        },
        data: JSON.stringify({
          method: obj.method,
          wish: eval(obj.wish),
          before: eval(obj.before),
          phone: parseInt(obj.phone),
          content: obj.content
        }),
        success: function(data) {
          if(data.code === 200 ) {
            alert('提交成功')
          } else {
            alert('提交失败')
          }
          return false
        }
      })
    }
    
  })
})
