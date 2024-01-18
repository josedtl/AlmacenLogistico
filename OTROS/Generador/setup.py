import sys
from cx_Freeze import setup, Executable

base = None
if sys.platform == "win32":
    base = "Win32GUI"

setup(
    name="MiAplicacion",
    version="0.1",
    description="Descripción de mi aplicación",
    executables=[Executable("GeneradorApp.py", base=base)]
)