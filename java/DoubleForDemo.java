public class DoubleForDemo {
    public static void main(String[] args) {
        //外层控制小时，内层控制分钟
        for (int hour = 0; hour < 3; hour++) {
            for (int minute = 0; minute < 4; minute++) {
                System.out.println(hour + "时" + minute + "分");
                /*
                0时0分
                0时1分
                0时2分
                0时3分

                1时0分
                1时1分
                1时2分
                1时3分

                2时0分
                2时1分
                2时2分
                2时3分

                 */
            }
        }
    }
}
