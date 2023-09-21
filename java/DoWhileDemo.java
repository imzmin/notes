public class DoWhileDemo {
    public static void main(String[] args) {
        /*
        do...while循环基本格式：

        do{
        循环体语句；
          }while(条件判断语句)；

        do...while循环完整格式：

        初始化语句；
        do{
        循环体语句；
        条件控制语句
          }while(条件判断语句)；
         */
        int i = 0;
        do {
            System.out.println("hello");
            i++;
        } while (i <= 5);

    }
}
