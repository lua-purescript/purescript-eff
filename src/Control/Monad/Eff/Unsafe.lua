-- module Control.Monad.Eff.Unsafe
local Control_Monad_Eff_Unsafe = {}

Control_Monad_Eff_Unsafe.unsafeInterleaveEff = function (f)
  return f
end

return Control_Monad_Eff_Unsafe
