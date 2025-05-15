{ pkgs }: {
  deps = [
    pkgs.nodejs_20          # Node.js 20 for running your JavaScript project
    pkgs.chromium           # System-installed Chromium for Puppeteer
    pkgs.glib               # Provides libglib-2.0.so.0, libgobject-2.0.so.0, libgio-2.0.so.0
    pkgs.nss                # Provides libnss3.so, libnssutil3.so, libsmime3.so
    pkgs.nspr               # Provides libnspr4.so
    pkgs.dbus               # Provides libdbus-1.so.3
    pkgs.atk                # Provides libatk-1.0.so.0
    pkgs.at-spi2-atk        # Provides libatk-bridge-2.0.so.0
    pkgs.cups               # Provides libcups.so.2
    pkgs.xorg.libxcb        # Provides libxcb.so.1
    pkgs.libxkbcommon       # Provides libxkbcommon.so.0
    pkgs.at-spi2-core       # Provides libatspi.so.0
    pkgs.xorg.libX11        # Provides libX11.so.6
    pkgs.xorg.libXcomposite # Provides libXcomposite.so.1
    pkgs.xorg.libXdamage    # Provides libXdamage.so.1
    pkgs.xorg.libXext       # Provides libXext.so.6
    pkgs.xorg.libXfixes     # Provides libXfixes.so.3
    pkgs.xorg.libXrandr     # Provides libXrandr.so.2
    pkgs.mesa               # Provides libgbm.so.1
    pkgs.pango              # Provides libpango-1.0.so.0
    pkgs.cairo              # Provides libcairo.so.2
    pkgs.alsa-lib           # Provides libasound.so.2
    pkgs.fontconfig         # For font rendering
    pkgs.freetype           # For font rendering
    pkgs.cacert             # For HTTPS requests
  ];
}