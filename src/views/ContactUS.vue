<template>
  <div class="tarifi">
  <div class="t-wrapper">
  <div class="t-container mx-auto">
    <div class="mx-auto" id="t-h2-text">
        <h2>Тарифы</h2>
    </div>
  
  
    <div class="row g-0 mx-auto">
  
  
      <div class="col-12 col-md-4 t-block" id="t-block-n-1">
        <div class="t-blocks t-block-helper" >
            <div class="t-blocks-wrapper">
                <div class="t-topside">
                    <div class="tarifname">
                      Стартовый
                    </div>
                  
                </div>
                <div class="t-brdr"></div>
                <div class="t-botside">
                    <div class="t-string">
                        <div class="t-text">
                          Консультации и работы по SEO
                        </div>
                    </div>
                    <div class="t-string">
                        <div class="t-text">
                          Услуги дизайнера
                        </div>
                    </div>
                    <div class="t-string">
                        <div class="t-text">
                          Неиспользованные оплаченные часы переносятся на следующий месяц
                        </div>
                    </div>
                    <div class="t-string">
                      <div class="t-text">
                        Предоплата от 6 000 рублей в месяц
                      </div>
                  </div>
                  </div>
                    <div ref="butn1"  class="ts-btn-prices">
                      <a id="bn1" @click="btn1()">Оставить заявку!</a>
                      
                    </div>
                
            </div>
        </div>
    </div>
  
    <div class="col-12 col-md-4 t-block" id="t-block-n-2">
      <div class="t-blocks t-block-helper">
          <div class="t-blocks-wrapper">
              <div class="t-topside">
                  <div class="tarifname">
                    Бизнес
                  </div>
  
              </div>
              <div class="t-brdr"></div>
              <div class="t-botside">
                <div class="t-string">
                  <div class="t-text">
                    Консультации и работы по SEO
                  </div>
              </div>
              <div class="t-string">
                  <div class="t-text">
                    Услуги дизайнера
                  </div>
              </div>
              <div class="t-string">
                  <div class="t-text">
                    Выское время реакции - до 2 рабочих дней
                  </div>
              </div>
              <div class="t-string">
                  <div class="t-text">
                    Неиспользованные оплаченные часы не переносятся
                  </div>
              </div>
              <div class="t-string">
                <div class="t-text">
                  Предоплата от 30 000 рублей в месяц
                </div>
            </div>
                </div>
                  <div ref="butn2" class="ts-btn-prices">
                    <a id="bn2" @click="btn2()">Оставить заявку!</a>
                  </div>
              
          </div>
      </div>
  </div>
  
    <div class="col-12 col-md-4 t-block" id="t-block-n-3">
      <div class="t-blocks t-block-helper" >
          <div class="t-blocks-wrapper">
              <div class="t-topside">
                  <div class="tarifname">
                    VIP
                  </div>
                  
              </div>
              <div class="t-brdr"></div>
              <div class="t-botside">
                <div class="t-string">
                  <div class="t-text">
                    Консультации и работы по SEO
                  </div>
              </div>
              <div class="t-string">
                  <div class="t-text">
                    Услуги дизайнера
                  </div>
              </div>
              <div class="t-string">
                  <div class="t-text">
                    Максимальное время реакции - в день обращения
                  </div>
              </div>
              <div class="t-string">
                  <div class="t-text">
                    Неиспользованные оплаченные часы не переносятся
                  </div>
              </div>
              <div class="t-string">
                <div class="t-text">
                  Предоплата от 270 000 рублей в месяц
                </div>
            </div>
                </div>
                  <div ref="butn3" class="ts-btn-prices">
                    <a id="bn3" @click="btn3()">Оставить заявку!</a>
                  </div>
              
          </div>
      </div>
  </div>
  
      
    </div>
  
  
  </div>
  <div class="col-12 mx-auto tarif-text">
  Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!
  </div>
  <div class="mx-auto recv-tarif">
  
  <a class="mx-auto" href="/">Получить индивидуальный тариф</a>
  </div>
  </div>
  </div>
  
    <div>
      <div id="wrp">
  
       <div id="diag" class="dialog"  @click.stop="hideForm">
       <div @click.stop id="formpp" class="form-popup" >
         <div class="form-dialog" id="forma">
          <button class="close-button" @click="closeDialog()">
      <span>&times;</span>
    </button>
          <form @submit.prevent="submitForm">
             <div class="form-group">
               <input type="text" v-model="name" name="name" class="form-control" id="InputName" placeholder="Ваше имя" required>
               <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
             </div>
             <div class="form-group">
               <input type="tel" v-model="number" name="phone" class="form-control" id="InputPhone" placeholder="Телефон" required>
               <span class="text-danger" v-if="errors.number">{{ errors.number }}</span>
             </div>
             <div class="form-group">
               <input type="email" v-model="email" name="email" class="form-control" id="InputEmail" placeholder="E-mail" required>
               <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
             </div>
             <div class="form-group">
               <textarea v-model="comment" name="msg" class="form-control" id="Textarea" rows="3" placeholder="Ваш комментарий"></textarea>
               <span class="text-danger" v-if="errors.comment">{{ errors.comment }}</span>
             </div>
             <div class="form-check">
               <input type="checkbox" class="form-check-input" id="Check" required>
               <label class="form-check-label" for="Check">
                 <a title = "Отныне и навеки, моя душа будет принадлежать создателю данной страницы">Согласен с политикой обработки персональных данных. </a></label>
             </div>
             <button type="submit" @click="submitForm()" class="form-btn btn-primary" :disabled="isLoading">
      <span v-if="isLoading">
        <span class="loading-spinner"></span>
        Отправка...
      </span>
      <span v-else>Отправить</span>
    </button>
           </form>
           <div class="messageD">
              {{ message }}
           </div>
         </div>
       </div>
     </div>
  
   
     </div>
  
  </div>
   </template>
   
   <script>
   import { mapState } from 'vuex'
   import { ref, onMounted } from 'vue';
   export default {
    setup() {
      const myElement = ref(null); 
  
      const butn1 = ref(null); 
      const butn2 = ref(null); 
      const butn3 = ref(null); 
  
      const getPosition = () => {
        if (myElement.value) {
          const rect = myElement.value.getBoundingClientRect();
         return rect;
        }
      };
  
      const getPosition1 = () => {
        if (butn1.value) {
          const rect = butn1.value.getBoundingClientRect();
         return rect;
        }
      };
      const getPosition2 = () => {
        if (butn2.value) {
          const rect = butn2.value.getBoundingClientRect();
         return rect;
        }
      };
      const getPosition3 = () => {
        if (butn3.value) {
          const rect = butn3.value.getBoundingClientRect();
         return rect;
        }
      };
      return {
        myElement,
        butn1,
        butn2,
        butn3,
        getPosition,
        getPosition1,
        getPosition2,
        getPosition3,
      };
    },
     computed: {
     ...mapState({
       isLoading: state => state.isLoading,
       success: state => state.success,
       error: state => state.error,
       errors: state => state.errors,
     }),
  
  
   },
     data() {
       return {
         showForm: true,
         message:'',
         name: '',
         number: '',
         email: '',
         comment: '',
        rect:null,
       }
     },
  
   methods: {

    async submitForm() {
    this.$store.dispatch('validateForm', {
                name: this.name,
    number: this.number,
email: this.email,
comment: this.comment
})
if(Object.keys(this.$store.state.errors).length) return
this.$store.commit('setLoading', true);
     try {
       const response = await fetch('https://formcarry.com/s/6V6Ujnz1n', {
         method: 'POST',
         headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
         body: JSON.stringify({
           name: this.name,
           number: this.number,
           email: this.email,
           comment: this.comment
         })
       });
       if (response.ok) {
         this.$store.commit('setSuccess', true);
         this.message="Форма отправлена!";
         this.name='';
         this.number='';
         this.email='';
         this.comment='';
         localStorage.removeItem(this.newName);
         localStorage.removeItem(this.newNumber);
         localStorage.removeItem(this.newEmail);
         localStorage.removeItem(this.newComment);
       } else {
         throw new Error('Не удалось отправить форму. Пожалуйста, попробуйте еще раз.');
       }
     } catch (error) {
       this.message="Не удалось отправить форму. Пожалуйста, попробуйте еще раз."
     } finally {
       this.$store.commit('setLoading', false);
     }
   },
    animateDialog() {
    var element = document.getElementById('wrp');
  
    element.style.position = 'absolute';
    element.style.zIndex = '9999';
  
    element.style.left = this.rect.left + 'px';
    element.style.top = this.rect.top + 'px';
  
    element.style.transform = 'scale(0.1)';
  
    const targetLeft = (window.innerWidth - element.offsetWidth) / 2 - element.offsetWidth / 2;
    const targetTop = (window.innerHeight - element.offsetHeight) / 2 - element.offsetHeight / 2;
  
  
  
    const animate = () => {

      const currentLeft = parseFloat(element.style.left);
      const currentTop = parseFloat(element.style.top);
  
      const dx = targetLeft - currentLeft;
      const dy = targetTop - currentTop;
  
      const step = 3;
  
      if (Math.abs(dx) > step) {
        element.style.left = currentLeft + (dx > 0 ? step : -step) + 'px';
      }
  
      if (Math.abs(dy) > step) {
        element.style.top = currentTop + (dy > 0 ? step : -step) + 'px';
      }
  
      const currentScale = parseFloat(element.style.transform.replace('scale(', '').replace(')', ''));
      const targetScale = 1;
      const scaleStep = 0.02;
  
      if (currentScale < targetScale) {
        element.style.transform = `scale(${currentScale + scaleStep})`;
      }
  
      if (Math.abs(dx) > step || Math.abs(dy) > step || currentScale < targetScale) {
        requestAnimationFrame(animate);
      }
    };
  
    animate();
  },
  
  
  
  
  
  
  
    
  
     closeDialog() {
      if(this.rect===null){
        this.rect=this.getPosition2();
      }
    var element = document.getElementById('wrp');
  
    const targetLeft = this.rect.left; 
    const targetTop = this.rect.top; 
  
    const animate = () => {
      const currentLeft = parseFloat(element.style.left);
      const currentTop = parseFloat(element.style.top);
  
  
      const dx = targetLeft - currentLeft;
      const dy = targetTop - currentTop;
  
  
      const step = 3;
  
    
      if (Math.abs(dx) > step) {
        element.style.left = currentLeft + (dx > 0 ? step : -step) + 'px';
      }
  
      if (Math.abs(dy) > step) {
        element.style.top = currentTop + (dy > 0 ? step : -step) + 'px';
      }
  
     
      const currentScale = parseFloat(element.style.transform.replace('scale(', '').replace(')', ''));
      const targetScale = 0.5;
      const scaleStep = 0.02;
  
      if (currentScale > targetScale) {
        element.style.transform = `scale(${currentScale - scaleStep})`;
      }
  

      if (Math.abs(dx) > step || Math.abs(dy) > step || currentScale > targetScale) {
        requestAnimationFrame(animate);
      } else {
        this.showForm = false;
        element.style.zIndex = '-2';

        history.pushState(false, null, "\u0000");
      }
    };
  

    animate();
  },
  
     hideForm() {
         this.showForm = false;
         history.pushState(false, null, "\u0000");
        
       },
       sForm() {
        this.rect=this.getPosition1();
        this.animateDialog();
        
       },
       btn1(){
        console.log(this.getPosition1());
        this.rect=this.getPosition1();
        history.pushState(true, null, "#contactus");
        this.showForm=true;
        this.animateDialog();
       },
       btn2(){
        this.rect=this.getPosition2();
        history.pushState(true, null, "#contactus");
        this.showForm=true;
        this.animateDialog();
       },
       btn3(){
        this.rect=this.getPosition3();
        history.pushState(true, null, "#contactus");
        this.showForm=true;
        this.animateDialog();
       },
   },
   created(){
  
   },
   beforeUnmount(){
  this.hideForm();
   },
   mounted() {
    if (location.hash === "#contactus") {
      this.sForm();
    }
  
    
    window.addEventListener("popstate", () => {
      if(location.hash === "#contactus"){
        this.sForm();
      }
      if(location.hash !== "#contactus"){
        this.closeDialog();
}
  })
  

  
      
      if (localStorage.name) {
        this.name = localStorage.name;
      }
      if (localStorage.email) {
        this.email = localStorage.email;
      }
      if (localStorage.number) {
        this.number = localStorage.number;
      }
      if (localStorage.comment) {
        this.comment = localStorage.comment;
      }
    },
    watch: {
      name(newName) {
        localStorage.name = newName;
      },
      email(newEmail) {
        localStorage.email= newEmail;
      },
      number(newNumber) {
        localStorage.number = newNumber;
      },
      comment(newComment) {
        localStorage.comment = newComment;
      }
    }
  }
   </script>
   
   
   <style>
   .popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;
}

.close-button span {
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
   .loading-spinner {
      display: inline-block;
      width: 1em;
      height: 1em;
      vertical-align: text-bottom;
      border: .25em solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: loading-spin 0.75s linear infinite;
    }

    @keyframes loading-spin {
      to {
        transform: rotate(360deg);
      }
    }
  #wrp{
    position: absolute;
    z-index: 9999;
  
  }
   .form-dialog {
     width:100%;
     padding-left:15px;
     padding-right:15px;
     padding-top:5px;
   }
   #formpp{
    transform: translate(-50%, -50%);
    width: 55vh;
   }
   
   .messageD {
    color:orange;
    padding-top:15px;
    text-align: center;
   }
  
   .fixed-bottom-right {
  
     bottom: 70px;
     right: 20px;
     z-index: 9999;
   }
   
   .dialog{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 9999;
     top:0;
     bottom:0;
     right:0;
     left:0;
     display:flex;
   }
   .form-popup {
     position: fixed;
     z-index: 9999;
  
     background-color: #040613;
     padding: 20px;
     border-radius: 12px;
     border: 2px solid #f14d34;
     border-radius: 5px;
   }
   @media (min-width:768px) {
    .fixed-bottom-right {
  
     bottom: 20px;
  
   }
   }
   </style>