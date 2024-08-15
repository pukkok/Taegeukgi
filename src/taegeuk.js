const canvas = document.getElementById('taegeukgi')
const ctx = canvas.getContext('2d')

// 태극기의 비율 :  3 대 2의 비율
canvas.width = window.innerWidth / 2
canvas.height = canvas.width / 3 * 2

// 태극기 중심
const centerX = canvas.width / 2
const centerY = canvas.height / 2

const s = canvas.width / 3 // 기준 비율 : 1
const slope = Math.atan2(canvas.height, canvas.width) // 대각선 기울기

// 태극, 배경, 건(3) 곤(6) 감(5) 리(4)
// 태극 : 지름 : 세로(높이)의 1/2

function drawBackGround () {
    // 바탕
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // 테두리
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 5
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
}
drawBackGround()

function drawGuideline () {
    ctx.lineWidth = 1
    ctx.strokeStyle = 'gray'
    
    ctx.beginPath() // 왼쪽 대각선
    ctx.moveTo(0, 0)
    ctx.lineTo(canvas.width, canvas.height)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath() // 오른쪽 대각선
    ctx.moveTo(canvas.width, 0)
    ctx.lineTo(0, canvas.height)
    ctx.closePath()
    ctx.stroke()

}
// drawGuideline()

function drawTaegeuk () {

    const r = s / 2 // 큰 원
    const smallR = r / 2 // 작은원

    // 빨간색 반원
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(centerX, centerY, r, Math.PI + slope, slope)
    ctx.fill()

    // 파란색 반원
    ctx.fillStyle = 'blue'
    ctx.beginPath()
    ctx.arc(centerX, centerY, r, slope, Math.PI + slope)
    ctx.fill()
    
    // 작은원의 꼭지점 찾기
    const a = smallR / Math.sqrt(13)
    const samllX = 3 * a
    const smallY = 2 * a

   // 빨간색 작은 원 (왼쪽 위)
   ctx.fillStyle = 'red'
   ctx.beginPath()
   ctx.arc(centerX - samllX, centerY - smallY, smallR, 0, Math.PI * 2)
   ctx.fill()

   // 파란색 작은 원 (오른쪽 아래)
   ctx.fillStyle = 'blue'
   ctx.beginPath()
   ctx.arc(centerX + samllX, centerY + smallY, smallR, 0, Math.PI * 2)
   ctx.fill()
}

drawTaegeuk()

function drawSagwae () {
    const circleR = s / 2
    const circleGap = s / 4
    const width = s / 12
    const height = s / 2
    const gwaeGap = s / 24

    const leftX = -(circleR + circleGap + width) 
    // 왼쪽의 경우 두깨만큼 추가로 빼준다
    const rightX = circleR + circleGap
    const betweenGap = width + gwaeGap

    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate(slope)
    // 건
    ctx.fillStyle = 'black'
    ctx.fillRect(leftX, - height / 2, width, height)
    ctx.fillRect(leftX - betweenGap, - height / 2, width, height)
    ctx.fillRect(leftX - betweenGap * 2, - height / 2, width, height)

    // 곤
    ctx.fillRect(rightX, - height / 2, width, height)
    ctx.fillRect(rightX + betweenGap, - height / 2, width, height)
    ctx.fillRect(rightX + betweenGap * 2, - height / 2, width, height)
    ctx.fillStyle = 'white'
    ctx.fillRect(rightX - 1, - gwaeGap / 2, width+2, gwaeGap)
    ctx.fillRect(rightX + betweenGap - 1, - gwaeGap / 2, width+2, gwaeGap)
    ctx.fillRect(rightX + betweenGap * 2 - 1, - gwaeGap / 2, width+2, gwaeGap)

    ctx.restore()


    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate(-slope)
    // 감
    ctx.fillStyle = 'black'
    ctx.fillRect(leftX, - height / 2, width, height)
    ctx.fillRect(leftX - betweenGap, - height / 2, width, height)
    ctx.fillRect(leftX - betweenGap * 2, - height / 2, width, height)
    ctx.fillStyle = 'white'
    ctx.fillRect(leftX - betweenGap - 1, - gwaeGap / 2, width + 2, gwaeGap)

    // 리
    ctx.fillStyle = 'black'
    ctx.fillRect(rightX, - height / 2, width, height)
    ctx.fillRect(rightX + betweenGap, - height / 2, width, height)
    ctx.fillRect(rightX + betweenGap * 2, - height / 2, width, height)
    ctx.fillStyle = 'white'
    ctx.fillRect(rightX - 1, - gwaeGap / 2, width+2, gwaeGap)
    ctx.fillRect(rightX + betweenGap * 2 - 1, - gwaeGap / 2, width+2, gwaeGap)
}

drawSagwae()