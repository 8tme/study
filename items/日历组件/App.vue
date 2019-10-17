<template>
    <div class="calendar">
        <div class="cal-header">
            <div class="left-btn" @click="go('back')"></div>
            <div class="date">{{ year }}年{{ month }}月{{ day }}日</div>
            <div class="right-btn" @click="go('forward')"></div>
        </div>

        <div class="cal-body">
            <div class="weekday">
                <div
                v-for="item in weekday"
                :key="item"
                >{{ item }}</div>      
            </div>
            <div class="everyday">
                <div
                v-for="item in 42" :key="item" 
                >
                <div v-if="item-week<=0" class="prev-month">{{ item-week+prevmonthDays }}</div>
                <div v-else-if="item-week<=curMonthdays"
                :class="{'active':`${year}/${month}/${item-week}`===curDate,
                        'choosed':`${year}/${month}/${item-week}`===choosedDate&&`${year}/${month}/${item-week}`!==curDate,}"
                :data-day="`${year}/${month}/${item-week}`"
                @click="choosing"
                >{{ item-week }}</div>
                <div v-else class="next-month">{{ item-week-curMonthdays }}</div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            weekday: ['日', '一', '二', '三', '四', '五', '六'],
            year: null,
            month: null,
            day: null,
            curDate: '',
            choosedDate: '',
        }
    },
    created() {
        this.getInitTime();
    },
    methods: {
        getInitTime() {
            const str = new Date().toLocaleDateString();
            this.curDate = str;
            const arr = str.split('/');
            this.year = arr[0]
            this.month = arr[1]
            this.day = arr[2]
        },
        choosing(e) {
            const day = e.target.dataset.day;
            this.choosedDate !== day && (this.choosedDate = day);
            this.day = e.target.innerText;
        },
        go(dir) {
            if(dir === 'back'){
                this.month === 1 ? ((this.month = 12) && this.year --) : this.month--;
            }
            if(dir === 'forward'){
                this.month === 12 ? ((this.month = 1) && this.year ++) : this.month++;
            }
            //当前月份天数是否有上次赋值的天数 有的月份有31天,而二月份则少得多
            (this.day > this.curMonthdays) && (this.day = this.curMonthdays);
            //重新赋值,不然不会立即渲染
            this.choosedDate = `${this.year}/${this.month}/${this.day}`;
        }
    },
    computed: {
        // 需要通过计算得到的值
        week() {
           return new Date(this.year, this.month-1, 1).getDay()
        },
        curMonthdays() {
            return new Date(this.year, this.month, 0).getDate();
        },
        prevmonthDays() {
            return new Date(this.year, this.month-1, 0).getDate();
        }

    },
}
</script>

<style>
    .calendar{
        cursor: pointer;   
    }
    .cal-header{
        display: flex;
        width: 560px;
        height: 80px;
        font-size: 18px;
        justify-content: space-between;
        align-items: center;
    }
    .date{
        height: 80px;
        line-height: 80px;
        text-align: center;
        flex-basis: auto;
        color: #08f;
    }
    .left-btn{
        border-top: 40px solid transparent;
        border-bottom: 40px solid transparent;
        border-right: 30px solid #08f;
    }
    .right-btn{
        border-top: 40px solid transparent;
        border-bottom: 40px solid transparent;
        border-left: 30px solid #08f;
    }

    .weekday,
    .everyday{
        height: 40px;
        width: 560px;
        display: flex;
        justify-content: space-around;
        background-color: #08f;
        box-sizing: border-box;
    }
    .weekday div{
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        font-weight: bold;
        color: aliceblue;
    }
    .everyday{
        display: flex;
        background-color: transparent;
        flex-wrap: wrap;
        height: 480px;
        align-content: space-around;
    }
    .everyday div{
        flex: 1 1 80px;
        text-align: center;
        line-height: 80px;
        font-size: 25px;
    }
    .prev-month,
    .next-month{
        color: #ccc;
    }
    .active{
        background-color: #08f;
        color: #fff;
    }
    .choosed{
        border: 5px solid #08f;
    }
</style>
