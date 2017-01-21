public class Solution {
    public int lengthLongestPath(String input) {
        String[] tokens = input.split("\n");
        
        int[] stack = new int[tokens.length+1];
        int len = 0;
        int level = 0;
        int res = 0;
        
        for(String s:tokens){
            int currentLevel = s.lastIndexOf("\t")+1;
            
            while(level >= currentLevel){
                len -= stack[level];
                level--;
            }
            
            stack[currentLevel] = s.replaceAll("\t", "").length()+1;            
            len += stack[currentLevel];
            
            if(s.contains(".") && len > res){
                res = len-1;
            }
            
            level = currentLevel;
        }
        
        return res;
    }
}
