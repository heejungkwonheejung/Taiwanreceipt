document.addEventListener('DOMContentLoaded', () => {
    const title2 = document.querySelector('.title2'); 

    
       
        title2.addEventListener('click', function() {
       
            const title1 = document.querySelector('.title1');
            title1.style.opacity = '0'; 
            setTimeout(() => {
                title1.style.display = 'none';
            }, 500); 
    
    
            const images = ['subtitle', 'imageA', 'imageB', 'imageC', 'imageD', 'imageG', 'imageJ', 'imageM','imageV','imageZ'];
            images.forEach(id => {
                const img = document.getElementById(id);
                img.style.display = 'block';
                img.style.opacity = '0';
                setTimeout(() => {
                    img.style.transition = 'opacity 0.5s'; 
                    img.style.opacity = '1'; 
                }, 0);
            });
    
            this.style.display = 'none'; 
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
            dialog.close(); 
        });
    });


document.querySelector('.newImage').addEventListener('mouseenter', function() {
    document.querySelector('.title1').style.display = 'none'; 
});

document.querySelector('.newImage').addEventListener('mouseleave', function() {
    document.querySelector('.title1').style.display = 'block'; 
});



document.addEventListener('DOMContentLoaded', () => {
   
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

        
        imageElement.addEventListener('click', () => {
            dialogElement.showModal(); 
        });

     
        dialogElement.querySelector('button').addEventListener('click', () => {
            dialogElement.close(); 
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
   
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

  
    Object.keys(imageMap).forEach((imageId) => {
        const imageElement = document.getElementById(imageId);
        const originalSrc = imageElement.src; 
        const hoverSrc = imageMap[imageId]; 

      
        imageElement.addEventListener('mouseenter', () => {
            imageElement.src = hoverSrc;
        });

       
        imageElement.addEventListener('mouseleave', () => {
            imageElement.src = originalSrc;
        });
    });
});





//-----오디오 설정-------
document.addEventListener('DOMContentLoaded', () => {
    const audioSrc = 'images/take.mp3';
    const receiptAudio = new Audio(audioSrc);
    const imageIds = ['imageA', 'imageB', 'imageC', 'imageD', 'imageG', 'imageJ', 'imageM', 'imageV' ,'imageZ'];

    imageIds.forEach((imageId) => {
        const imageElement = document.getElementById(imageId);
        imageElement.addEventListener('mouseenter', () => {
            receiptAudio.play();
        });
        imageElement.addEventListener('mouseleave', () => {
            receiptAudio.pause();
            receiptAudio.currentTime = 0; 
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const audioSrc = 'images/nothx.mp3';
    const receiptAudio = new Audio(audioSrc);
    const buttons = document.getElementsByClassName('nothanks');
    Array.from(buttons).forEach((button) => {
        button.addEventListener('mouseenter', () => {
            receiptAudio.play();
        });
        button.addEventListener('mouseleave', () => {
            receiptAudio.pause();
            receiptAudio.currentTime = 0;
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const targetElements = document.querySelectorAll('#dialog-a h1, #dialog-a p, #dialog-b h1, #dialog-b p, #dialog-c h1, #dialog-c p, #dialog-d h1, #dialog-d p, #dialog-g h1, #dialog-g p, #dialog-j h1, #dialog-j p, #dialog-m h1, #dialog-m p, #dialog-v h1, #dialog-v p, #dialog-z h1, #dialog-z p');
    targetElements.forEach(element => {
        const words = element.innerText.split(/\s+/); 
        element.innerHTML = '';
        words.forEach(word => {
            const wordBox = document.createElement('span'); 
            wordBox.classList.add('word-box'); 
            wordBox.textContent = word; 
            element.appendChild(wordBox); 
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var subtitle = document.getElementById('subtitle');

    subtitle.addEventListener('click', function() {
        location.reload(); 
    });
});
