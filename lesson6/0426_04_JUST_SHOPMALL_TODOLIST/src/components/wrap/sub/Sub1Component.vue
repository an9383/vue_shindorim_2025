<template>
  <main id="sub1">
    <section id="section1">
      <div class="container">
        <div class="title">
          <h2>TODO LIST</h2>
        </div>
        <div class="content">
          <div class="input-box">
            <!--할일입력상자-->
            <input 
              type="text" 
              placeholder="할일내용을 입력하세요" 
              v-model="todoList"
              />
          </div>
          <div class="list-box">
            <ul class="todo-list">
              <li>
                <!--할일리스트-->
                  <input type="checkbox" name="" id="" />
                  <p>할일내용</p>
                  <button>x</button>
              </li>
            </ul>
            <ul class="todo-complete-list">
              <li>
                  <input type="checkbox" name="" id="" />
                  <p>할일내용</p>
                  <button>x</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'Sub1Component',
  data(){
    return {
      todoList: [],
      completeList: []
    }
  }
}
</script>
<style lang="scss" scoped>
    #sub1{
        width: 100%;
        #section1{
           width: 100%;
           padding: 60px;
          .container{
            .title {
              width: 100%;
              font-size: 28px;
              font-weight: 600
                        }
            .content{}

          }
        }
    }
</style>