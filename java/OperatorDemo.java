public class OperatorDemo {
    public static void main(String[] args){
        //字符+号操作
        //定义两个变量
        int a = 10;
        char c = 'A'; // 'A'的值是75
        c = 'a';  // 'a'的值是97
        c = '0';  //'0'的值是48
        System.out.println(a+c);  //75  107 58
        //字符参与'+'操作的时候，拿的是对应的数值来计算的

        //char ch = a + c;  //报错：不兼容的类型(char类型会被自动提升为int类型，应该用int类型定义)
        int  j = a + c;   // j=58

        //算术表达式中包含多个多个基本数据类型的值的时候，整个算术表达式的类型会自动进行提升
        //提升规则：
        // byte类型、short类型和char类型将被提升到int类型
        // 整个表达式的类型自动提升到表达式中最高等级操作数同样的类型
        // 等级顺序：byte short char int long float double
    }
}
