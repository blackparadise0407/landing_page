const cursor = $('.cursor')
const cursorFollowing = $('.cursorFollowing')

$(window).on('mousemove', ({ clientX, clientY }) => {
  gsap.to(cursor, {
    duration: 0.4,
    x: clientX - (cursor.width() / 2),
    y: clientY - (cursor.height() / 2)
  })
  gsap.to(cursorFollowing, {
    duration: 0.5,
    x: clientX - (cursor.width() / 2),
    y: clientY - (cursor.height() / 2)
  })
})