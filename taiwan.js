document.addEventListener('DOMContentLoaded', () => {
    const title2 = document.querySelector('.title2'); // title2에 대한 참조

    
        // title2 클릭 시 실행되는 함수
        title2.addEventListener('click', function() {
            // title1 숨기기
            const title1 = document.querySelector('.title1');
            title1.style.opacity = '0'; // 먼저 투명도를 0으로 설정
            setTimeout(() => {
                title1.style.display = 'none';
            }, 500); // 0.5초 후에 display를 none으로 변경하여 완전히 숨김
    
            // 이미지들이 서서히 보이도록 설정
            const images = ['subtitle', 'imageA', 'imageB', 'imageC', 'imageD', 'imageG', 'imageJ', 'imageM','imageV','imageZ'];
            images.forEach(id => {
                const img = document.getElementById(id);
                img.style.display = 'block';
                img.style.opacity = '0'; // 먼저 투명도를 0으로 설정
                setTimeout(() => {
                    img.style.transition = 'opacity 0.5s'; // 0.5초 동안 투명도가 변경되도록 설정
                    img.style.opacity = '1'; // 투명도를 1로 변경하여 서서히 나타나게 함
                }, 0);
            });
    
            this.style.display = 'none'; // 'this'는 클릭된 title2를 참조합니다.
        });
    });
    
    // 모달 창 구매하다! 버튼 관련 
    document.addEventListener('DOMContentLoaded', () => {
        const buyButtons = document.querySelectorAll('.buy-button');
    
        buyButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.src = 'images/buybotton2.png';
            });
    
            button.addEventListener('mouseleave', () => {
                button.src = 'images/buybotton1.png';
            });
            button.addEventListener('click', () => {
                alert('감사하다! 구매를 선택해서. 새로운 영수증을 보다 당신은 신기한 경험!');
            });
        });
    });
    
    

    // 모달 창 관련 코드
    const dialogs = document.querySelectorAll('dialog');
    dialogs.forEach(dialog => {
        const closeButton = dialog.querySelector('button');
        closeButton.addEventListener("click", () => {
            dialog.close(); // 닫기 버튼 클릭 시 모달 닫기
        });
    });


document.querySelector('.newImage').addEventListener('mouseenter', function() {
    document.querySelector('.title1').style.display = 'none'; // 마우스가 올라갈 때 title1 숨기기
});

document.querySelector('.newImage').addEventListener('mouseleave', function() {
    document.querySelector('.title1').style.display = 'block'; // 마우스가 떠날 때 title1 보이기
});



document.addEventListener('DOMContentLoaded', () => {
    // 이미지와 dialog ID 매핑
    const imageToDialogMap = {
        'imageA': 'dialog-a',
        'imageB': 'dialog-b',
        'imageC': 'dialog-c',
        'imageD': 'dialog-d',
        'imageG': 'dialog-g',
        'imageJ': 'dialog-j',
        'imageM': 'dialog-m',
        'imageV': 'dialog-v',
        'imageZ': 'dialog-z'
    };

    Object.keys(imageToDialogMap).forEach(imageId => {
        const dialogId = imageToDialogMap[imageId];
        const imageElement = document.getElementById(imageId);
        const dialogElement = document.getElementById(dialogId);

        // 이미지 클릭 이벤트 리스너
        imageElement.addEventListener('click', () => {
            dialogElement.showModal(); // 해당 다이얼로그 표시
        });

        // 다이얼로그 내부의 닫기 버튼에 이벤트 리스너 설정
        dialogElement.querySelector('button').addEventListener('click', () => {
            dialogElement.close(); // 다이얼로그 닫기
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 이미지 ID와 호버 시 변경될 이미지 경로 매핑
    const imageMap = {
        'imageA': 'images/aa.png',
        'imageB': 'images/bb.png',
        'imageC': 'images/cc.png',
        'imageD': 'images/dd.png',
        'imageG': 'images/gg.png',
        'imageJ': 'images/jj.png',
        'imageM': 'images/mm.png',
        'imageV': 'images/vv.png',
        'imageZ': 'images/zz.png'
    };

    // 매핑된 각 이미지에 대해 이벤트 리스너 설정
    Object.keys(imageMap).forEach((imageId) => {
        const imageElement = document.getElementById(imageId);
        const originalSrc = imageElement.src; // 원래 이미지 경로 저장
        const hoverSrc = imageMap[imageId]; // 호버 시 이미지 경로

        // 마우스 호버 시 이미지 변경
        imageElement.addEventListener('mouseenter', () => {
            imageElement.src = hoverSrc;
        });

        // 마우스가 이미지에서 벗어날 때 원래 이미지로 복귀
        imageElement.addEventListener('mouseleave', () => {
            imageElement.src = originalSrc;
        });
    });
});





//-----오디오 설정-------
document.addEventListener('DOMContentLoaded', () => {
    // 오디오 파일 경로
    const audioSrc = 'images/take.mp3';
    // 오디오 객체 생성
    const receiptAudio = new Audio(audioSrc);

    // 이미지 ID와 호버 시 오디오 재생 매핑
    const imageIds = ['imageA', 'imageB', 'imageC', 'imageD', 'imageG', 'imageJ', 'imageM', 'imageV' ,'imageZ'];

    imageIds.forEach((imageId) => {
        const imageElement = document.getElementById(imageId);
        
        // 마우스 호버 시 오디오 재생
        imageElement.addEventListener('mouseenter', () => {
            receiptAudio.play();
        });

        // (선택 사항) 마우스가 이미지에서 벗어날 때 오디오 중지

        imageElement.addEventListener('mouseleave', () => {
            receiptAudio.pause();
            receiptAudio.currentTime = 0; // 오디오 재생 위치를 처음으로 되돌림
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 오디오 파일 경로
    const audioSrc = 'images/nothx.mp3';
    // 오디오 객체 생성
    const receiptAudio = new Audio(audioSrc);

    // 클래스 이름으로 버튼 요소들 선택
    const buttons = document.getElementsByClassName('nothanks');

    Array.from(buttons).forEach((button) => {
        // 마우스 호버 시 오디오 재생
        button.addEventListener('mouseenter', () => {
            receiptAudio.play();
        });

        // 마우스가 버튼에서 벗어날 때 오디오 중지
        button.addEventListener('mouseleave', () => {
            receiptAudio.pause();
            receiptAudio.currentTime = 0; // 오디오 재생 위치를 처음으로 되돌림
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    // dialog 내의 <h1> 및 <p> 요소 선택
    const targetElements = document.querySelectorAll('#dialog-a h1, #dialog-a p, #dialog-b h1, #dialog-b p, #dialog-c h1, #dialog-c p, #dialog-d h1, #dialog-d p, #dialog-g h1, #dialog-g p, #dialog-j h1, #dialog-j p, #dialog-m h1, #dialog-m p, #dialog-v h1, #dialog-v p, #dialog-z h1, #dialog-z p');

    targetElements.forEach(element => {
        const words = element.innerText.split(/\s+/); // 정규식을 사용하여 모든 공백을 기준으로 단어 분리
        element.innerHTML = ''; // 원래 요소의 내용을 지움

        words.forEach(word => {
            const wordBox = document.createElement('span'); // 각 단어를 감쌀 span 요소 생성
            wordBox.classList.add('word-box'); // 스타일을 적용하기 위한 클래스 추가
            wordBox.textContent = word; // span 요소에 단어 텍스트 추가
            element.appendChild(wordBox); // 각 단어를 요소에 다시 추가
            //element.appendChild(document.createTextNode(' '));  단어 사이에 공백 추가
        });
    });
});
//작은 타이틀 누를 경우 페이지 새로고침
document.addEventListener('DOMContentLoaded', function() {
    var subtitle = document.getElementById('subtitle');

    subtitle.addEventListener('click', function() {
        location.reload(); // 페이지 새로고침
    });
});
