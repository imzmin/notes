public class OperatorDemo7 {
    public static void main(String[] args){

        int weght1 = 180;
        int weght2 = 200;
        //比较
        boolean ch = weght1 == weght2 ? true: false;
        //输出结果
        System.out.println( "两只老虎的体重" + ch); //两只老虎的体重false


        int height1 = 150;
        int height2 = 210;
        int height3 = 165;
        //比较
        int h = height1 > height2 ? height1 : height2;
        int max = (h > height3) ? h : height3;
        //输出结果
        System.out.println( "三个和尚最高的是" + max + "cm");  //三个和尚最高的是210cm




    }
}
