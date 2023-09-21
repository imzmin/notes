public class ForDemo {
    public static void main(String[] args) {
        /*
        for循环格式：
        for(初始化语句；条件判断语句：条件控制语句){
           循环体语句；
        }
        执行流程：
        1、执行初始化语句
        2、执行条件判断语句，看其结果是true还是false：false循环结束，true继续执行
        3、执行循环体语句
        4、执行条件控制语句，回到2继续
         */

        //输出1-5和5-1的数据
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
        for (int i = 5; i >= 1; i--) {
            System.out.println(i);
        }
        //1-5之间的求和
        int sum = 0;
        for (int i = 1; i <= 5; i++) {
            sum += i;
        }
        System.out.println(sum);
        //求1-100之间的偶数和
        int sum1 = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 2 == 0) {
                sum1 += i;
            }
        }
        System.out.println(sum1);

        //输出所有的水仙花数以及个数
        int count = 0;
        for (int i = 100; i <= 999; i++) {
            //任意一个数的指定位上的数值如何求：先使用整数操作将要求的数字移动到个位上，再使用取余操作取出最后一位上的值
            int ge = i % 10;
            int shi = i / 10 % 10;
            int bai = i / 10 / 10 % 10;
            if (ge * ge * ge + shi * shi * shi + bai * bai * bai == i) {
                count++;
                System.out.println(i); // 153 370 371 407
            }
        }
        System.out.println(count); //  4个

    }
}
