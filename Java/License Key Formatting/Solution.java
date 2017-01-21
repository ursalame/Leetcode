public class Solution {
    public String licenseKeyFormatting(String S, int K) {
        StringBuilder sb = new StringBuilder();
       
       for(int i = S.length()-1; i >= 0; i--){
           char c = S.charAt(i);
           int l = sb.length();
           if(c != '-'){
               if(l % (K+1) ==K){
                   sb.append('-');
               }
               sb.append(c);
           }
       }
       
       return sb.reverse().toString().toUpperCase();
    }
}
