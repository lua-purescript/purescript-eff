-- module Control.Monad.Eff

local Control_Monad_Eff = {}

Control_Monad_Eff.returnE = function (a)
  return function ()
    return a
  end
end

Control_Monad_Eff.bindE = function (a)
  return function (f)
    return function ()
      return f(a())()
    end
  end
end

Control_Monad_Eff.runPure = function (f)
  return f()
end

Control_Monad_Eff.untilE = function (f)
  return function ()
    while not f() do end
    return {}
  end
end

Control_Monad_Eff.whileE = function (f)
  return function (a)
    return function ()
      while f() do
        a()
	  end
      return {}
    end
  end
end

Control_Monad_Eff.forE = function (lo)
  return function (hi)
    return function (f)
      return function ()
        for i = lo, hi do
          f(i)()
	    end
      end
    end
  end
end

Control_Monad_Eff.foreachE = function (as)
  return function (f)
    return function ()
      for i = 0, #as do
        f(as[i])()
	  end
    end
  end
end

return Control_Monad_Eff
