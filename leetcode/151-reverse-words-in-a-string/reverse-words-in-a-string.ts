function reverseWords(s: string): string {
    s.trim();
    let i = s.length - 1 , j = i + 1 , res = "";
    while( i >= 0 ){
        if( s[i - 1] === " " || i - 1 < 0 ){
            res += s.substring(i , j);
            if( i > 0 )res += " "
            i--;
            while( i >= 0 && s[i] === " " )i--;
            j = i + 1;
        }
        else i--;
    }
    return res.trim();
};