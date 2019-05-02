var button = document.querySelector('.archlinux__header-button');
        var header = document.querySelector('.archlinux__header');
        var test = document.querySelector('.archlinux__test');
        var price = document.querySelector('.archlinux__price');
        var many = document.querySelector('#many');

        var item = document.querySelectorAll('.archlinux__test-item');

        button.addEventListener('click', ()=> {
            header.style.display = 'none';
            test.style.display = 'block';
        });

        for (var i = 0; i < item.length; i++) {
            item[i].addEventListener('click', (e)=> {
                test.style.display = 'none';
                price.style.display = 'block'

                if(e.target.id == 'landing') {
                    many.innerHTML = '100'
                }
                if(e.target.id == 'visit') {
                    many.innerHTML = '200'
                }
                if(e.target.id == 'corporative') {
                    many.innerHTML = '300'
                }
                if(e.target.id == 'promo') {
                    many.innerHTML = '400'
                }
                if(e.target.id == 'internet') {
                    many.innerHTML = '500'
                }
                if(e.target.id == 'servise') {
                    many.innerHTML = '600'
                }
            })
        }

        function Formdata(data){
            if (data.phone != null && data.phone.value.length == 0 ) {
                alert('Заполните номер телефона');
                return false;
            }
        }