<template>
    <ul>
        <li v-for="data in dataList" :key="data.cinemaId">
            <div class="left">
                <span class="cin-name">{{ data.name }}</span>
                <span class="cin-addr">{{ data.address }}</span>
            </div>
            <div class="right">
                <div class="right-price">￥{{ data.lowPrice / 100 }}起</div>
                <div class="right-addr">距离未知</div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="scss" scoped>
    ul {
        li {
            padding: 15px;
            width: calc(100% - 30px);
            border-bottom: 1px solid #ededed;
            display: flex;
            justify-content: flex-start;

            .left {
                display: flex;
                flex-direction: column;
                width: calc(100% - 70px);

                .cin-name {
                    color: #191a1b;
                    font-size: 15px;
                }

                .cin-addr {
                    color: #797d82;
                    font-size: 12px;
                    margin-top: 5px;
                    height: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

            .right {
                width: 70px;
                text-align: center;
                display: flex;
                flex-direction: column;

                .right-price {
                    font-size: 15px;
                    color: #ff5f16;
                }

                .right-addr {
                    color: #797d82;
                    font-size: 12px;
                    margin-top: 5px;
                    height: 18px;
                }
            }
        }

        padding-bottom: 44px;
    }
</style>
