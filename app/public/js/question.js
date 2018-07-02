$(function () {
  $("#js-push-btn").click(function () {
    var arr = $('#js-form').serializeArray()
    var temp = 0;
    var obj = {}
    arr.forEach(function (v, i) {
      obj[v.name] = v.value
      if (v.value === "") {
        temp++;
      }
    })
    console.log(obj.phone.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) === null)
    if (temp > 0 || obj.phone.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) === null) {
      alert('参数不可为空或参数错误')
    } else {
      $.ajax({
        url: '/question',
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        data: JSON.stringify({
          method: obj.method,
          wish: eval(obj.wish),
          before: eval(obj.before),
          phone: parseInt(obj.phone),
          content: obj.content,
          userip: `${returnCitySN['cip']} ${returnCitySN['cname']}`,
          userurl: location.href,
          keyword: localStorage.getItem('keyword')
        }),
        success: function (data) {
          if (data.code === 200) {
            alert('提交成功')
          } else {
            alert('提交失败')
          }
          return false
        }
      })
    }

  })

  $("#js-video-small").click(function () {
    $("#js-video").removeClass("header-video")
    $("#js-video").addClass("header-video-small")
    $("#js-video-small").hide()
  })
})