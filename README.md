# Icons Pack — 650 іконок Windows у одному DLL

Сайт-вітрина для набору іконок: завантаження `setup.exe`, який кладе
`icons.dll` (650 ресурсів) у `C:\Windows\System32`.

- **650 іконок** — 627 `.ico` + 22, витягнутих зі старих 16-бітних `.icl`
- `setup.exe` ставить DLL у System32 із запитом UAC, `/uninstall` — прибирає
- `icons.dll` без залежностей: `LoadImageW(hDll, L"accessibility", IMAGE_ICON, …)`
- Галерея всіх іконок із пошуком і копіюванням назви ресурсу по кліку

## Файли

| Файл | Опис |
|------|------|
| `downloads/setup.exe` | Встановлювач (2,8 МБ), іконка `setup.ico` |
| `downloads/icons.dll` | Тільки DLL з усіма іконками (2,7 МБ) |
| `downloads/icons_list.txt` | Назва ресурсу → файл → походження |

Сайт статичний, без залежностей і збирається з папки `site/` у батьківському
проєкті (`tools/make_site.py`).
