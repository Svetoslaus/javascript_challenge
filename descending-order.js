import java.util.*;

public class DescendingOrder {
  public static int sortDesc(final int num) {
    String[] numbers = (Integer.toString(Integer.valueOf(num))).split("");
    Arrays.sort(numbers);
    
    String result = "";
    
    for(String sum : numbers)
    {
      result = sum + result;
    }
    
    return Integer.parseInt(result);
  }
}
