let template=`
<div class="myHeader">
  <header>
    <div class="header_con">
        <div id="haed_time" v-html="timeStr"></div>
    </div>
    <p class="mesg">要加油呀！</p>
  </header>
</div>
`
export default {
  template:template,
  name: 'myHeader',
  components: { },
  props: { },
  data () {
    return {
      timeStr: ''
    }
  },
  created () {
    this.fnTimeleft()
    setInterval(this.fnTimeleft, 60000)
  },
  mounted () { },
  activated () {},
  methods: {
    fnTimeleft () {
      // 实际开发需要通过ajax来读取后台的时间
      var sNow = new Date()
      let furtureTime = window.myConfig.initialTime
      // var sFuture = new Date(2021, 3, 4, 0, 0, 0)
      var sFuture = new Date(furtureTime).setHours(0, 0, 0)
      // 计算还有多少秒
      var sLeft = parseInt((sFuture - sNow) / 1000)
      // 计算还剩多少天
      var iDays = parseInt(sLeft / 86400)
      // 计算还剩多少小时
      var iHours = parseInt((sLeft % 86400) / 3600)
      // 计算还剩多少分
      var iMinutes = parseInt(((sLeft % 86400) % 3600) / 60)
      // 计算还剩多少秒
      // var iSeconds = sLeft % 60
      var sTr = `距离清明假期还剩:<strong>${iDays}</strong>天${this.fnTodou(iHours)}时` +
                `${this.fnTodou(iMinutes)}分`
      this.timeStr = sTr
    },
    fnTodou (n) {
      if (n < 10) {
        return '0' + n
      } else {
        return n
      }
    }
  }
}

