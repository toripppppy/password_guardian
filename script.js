const display   = document.getElementById('display')
const countDown = document.getElementById('count-down')

//--------- SETTING ----------//
const PASSWORD = 'pasuwa-do'        // パスワード
const period = moment('2022-12-10') // 目標日

const motibe_words = [
    'おめえのモチベはそんなもんか？？？',
    'PS5を忘れたのか！！！',
    'いやいやいや早すぎィ！！！',
    '学年一位はどうした！！！',
    'まだですよ！！！！！'
]
//----------------------------//

/**
 * 12月10日以降ならパスワードを開示
 */
const checkPeriod = () => {
    const now    = moment(moment().format('YYYY-MM-DD')) // 今日
    
    let reply
    // 12月10日以降
    if (now.isSameOrAfter(period)) {
        // パスワードを開示
        reply = PASSWORD

    } else {
        const cur = display.innerText.toString()
        // 同じ言葉は心に響かないから重複なし
        while (true) {
            const word = motibe_words[Math.floor(Math.random() * motibe_words.length)];
            if (cur === word) continue
            reply = word
            break
        }
    }

    display.innerText = reply
}

/**
 * 常に呼び出し
 * カウントダウンを調整
 */
const update = () => {
    // カウントダウン
    const diff = period.diff(moment());
    const duration = moment.duration(diff);
    // 目標日に達したらストップ
    if (moment().isSameOrAfter(period)) {
        countDown.innerText = `パスワード解放まで、\nあと0日0時間0分0秒・・・`
        return
    }
    // 日・時・分・秒を取得
    const days    = Math.floor(duration.asDays());
    const hours   = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    countDown.innerText = `パスワード解放まで、\nあと${days}日${hours}時間${minutes}分${seconds}秒・・・`
}

// 毎秒呼び出し
window.onload = update
setInterval(update, 1000);
