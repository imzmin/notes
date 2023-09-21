public class WhileDemo {
    public static void main(String[] args) {
        /*
        while循环基本格式：
        while(条件判断语句){
           循环体语句；
        }
        while循环完整格式：
        初始化语句；
        while(条件判断语句){
           循环体语句；
           条件控制语句；
        }
         */
        int count = 0;  //计数器
        double paper = 0.1;  //纸张厚度/mm
        int zf = 8844430;  //珠穆朗玛峰高度
        while (paper <= zf) {
            paper *= 2;
            count++;
        }
        System.out.println("需要折叠" + count + "次");


    }
}
