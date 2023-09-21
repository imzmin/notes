public class BreakDemo {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i % 2 == 0) {
                //continue; //只要遇到偶数就跳出这次循环，输出1,3,5
                break;    //只要遇到偶数就终止整个循环，输出1
            }
            System.out.println(i);
        }
    }
}
