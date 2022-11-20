function jawab(correct_answer, next_soal) {
    let answer = document.getElementsByClassName('input-soal')[0].value

    document.getElementsByClassName('wrong-answer-notice')[0].style.display = 'none'

    if (correct_answer == answer.toLowerCase()) {
        window.location.href = next_soal
} else {
    setTimeout(function() {
        document.getElementsByClassName('wrong-answer-notice')[0].style.display = 'block'
        document.getElementsByClassName('wrong-answer-notice')[0].innerHTML = 'JAWABAN SALAH !'
    }, 0);
}
}