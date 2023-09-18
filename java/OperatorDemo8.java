public class OperatorDemo8 {
    public static void main(String[] args){
        //字符串的‘+’操作
        System.out.println("work" + "hard");    // workhard
        System.out.println("work" + 666);       // work666
        System.out.println("work" + 666 + 999); // work666999
        System.out.println( 1 + 99 + "work");    // 100work
        //当'+'操作中出现字符串时，这个+是字符串连接符，而不是算术运算符
        //在'+'操作中，如果出现了字符串，就是连接运算符，否则就是算术运算符
        //当连续进行'+'操作时，从左到右逐个执行
    }
}
