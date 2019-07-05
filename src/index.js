// PLEASE DON'T change function name
module.exports = function makeExchange(mon) {
    var H=50, Q=25, D=10, N=5, P=1,ost=0, ch=0;
    var money={};
    if (mon<=0) money={};
    else
    {
        if (mon>=10000) money.error = "You are rich, my friend! We don't have so much coins for exchange";
        else
        {
            if (mon<50)
            {
                if (mon>=Q) {ost=mon%Q; ch=Math.floor(mon/Q); money.Q=ch; if (ost!=0) mon=0; mon=ost;}
                if (mon>=D) {ost=mon%D; ch=Math.floor(mon/D); money.D=ch; if (ost!=0) mon=0; mon=ost;}
                if (mon>=N) {ost=mon%N; ch=Math.floor(mon/N); money.N=ch; if (ost!=0) mon=0; mon=ost;}
                if (mon>=P) {ost=mon%P; ch=Math.floor(mon/P); money.P=ch;}
            }
            else
            {
                if (mon>=H) {ost=mon%H; ch=Math.floor(mon/H); money.H=ch;}
                if (ost!=0)
                {
                    mon=ost;
                    if (mon>=Q) {ost=mon%Q; ch=Math.floor(mon/Q); money.Q=ch; if (ost!=0) mon=ost;}
                    if (ost!=0)
                    {
                        mon=ost;
                        if (mon>=D) {ost=mon%D; ch=Math.floor(mon/D); money.D=ch; if (ost!=0) mon=ost;}
                        if (ost!=0)
                        {
                            mon=ost;
                            if (mon>=N) {ost=mon%N; ch=Math.floor(mon/N); money.N=ch; if (ost!=0) mon=ost;}
                            if (ost!=0)
                            {
                                mon=ost;
                                if (mon>=P) {ost=mon%P; ch=Math.floor(mon/P); money.P=ch;}
                            }
                        }
                    }
                }
            }

        }
    }

    return(money);
}
