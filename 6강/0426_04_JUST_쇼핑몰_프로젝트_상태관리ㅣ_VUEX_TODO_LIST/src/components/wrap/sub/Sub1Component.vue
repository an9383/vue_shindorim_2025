<template>
    <main id="sub1">
        <section id="section1">
            <div class="container">
                <div class="title">
                    <h2>TODO LIST</h2>
                </div>
                <div class="content">
                    <div class="input-box">
                        <!-- 할일 입력 상자 -->
                        <input 
                            type="text"
                            placeholder="할일을 입력하세요!"
                            v-model="todo"
                            @keyup.enter="addItem"
                        >
                    </div>
                    <div class="list-box">
                        <!-- 할일목록 리스트 상자 -->
                        <ul class="todo-list list">
                            <!-- 할일목록 리스트 반복문 구현 -->
                            <li 
                                v-for="(item, idx) in todoList"
                                :key="item"
                            >
                                <input 
                                    type="checkbox" 
                                    name="chk" 
                                    :id="`chk${idx+1}`"
                                    :value="item"
                                >
                                <p>{{item}}</p>
                                <button>×</button>
                            </li>
                            
                        </ul>
                        <!-- 할일완료목록 리스트 상자 -->
                        <ul class="todo-complete-list list">
                            <!-- 할일완료목록 리스트 반복문 구현 -->
                            <li>
                                <input type="checkbox" name="" id="">
                                <p>할일내용</p>
                                <button>×</button>
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
        name: "Sub1Component",
        data(){
            return {
                todo:'',
                todoList: [
                    '할일1'
                ]
            }
        },
        methods: {
            addItem(){
                this.todoList = [
                    ...this.todoList,
                    this.todo
                ]
            }
        }
    };
</script>

<style lang="scss"  scoped>
    #sub1 {
        width: 100%;
        background: #f9f9f9;
        #section1 {
            width: 100%;
            padding: 60px;
            .container {
                width: 100%;
                .title {
                    width: 100%;
                    padding-bottom: 40px;
                    h2 {
                        width: 100%;
                        font-size: 28px;
                        font-weight: 600;
                        color: #3ad;
                        text-align: center;                        
                    }
                }
                .content {
                    width: 100%;
                    .input-box {
                        width: 100%;
                        input {
                            width: 100%;
                            height: 60px;
                            border: 1px solid #ccc;
                            background: #fff;
                            padding: 0 30px;
                            outline-offset: -1px;
                            outline: 1px solid transparent;
                            transition: all 0.3s;
                            border-radius: 5px;
                            font-size: 17px;
                            &:focus {
                                outline: 1px solid #000;
                            }
                            &::placeholder {
                                font-size: 17px;
                                color: #777;
                                font-weight: 300;
                            }
                        }
                    }

                    .list-box {
                        padding-top: 30px;
                        width: 100%;
                        ul.list {
                            width: 100%;
                            li {
                                width: 100%;
                                height: 50px;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                border-bottom: 1px solid #ddd;
                                &:first-child {
                                    border-top: 1px solid #000;
                                }
                                input {
                                    width: 20px;
                                    height: 20px;
                                }
                                p {
                                    font-size: 15px;
                                    width: calc(100% - 20px - 20px);
                                    display: flex;
                                    justify-content: flex-start; 
                                    padding-left: 20px;                                   
                                }
                                button {
                                    width: 20px;
                                    font-size: 25px;
                                    background: none;
                                    border: 0;
                                    cursor: pointer;
                                    margin-right: 5px;
                                    color: #333;
                                    font-weight: 300;
                                }
                            }
                            &.todo-list {}   
                            &.todo-complete-list {
                                padding-top: 50px;
                            } 
                        }
                    }
                }
            }
        }
       
    }
</style>