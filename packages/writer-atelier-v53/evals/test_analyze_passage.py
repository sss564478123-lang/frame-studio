from importlib.util import spec_from_file_location, module_from_spec
from pathlib import Path
P=Path(__file__).resolve().parents[1]/"skills/novel-episode-release/scripts/analyze_passage.py"
spec=spec_from_file_location("a",P); m=module_from_spec(spec); spec.loader.exec_module(m)

def test_phrase_echo_candidates_exist():
    out=m.analyze_text("그런 말은 하지 마. 그런 말은 이미 들었어. 그런 말은 이제 됐어.")
    assert "phrase_echo_candidates" in out

def test_analysis_is_advisory_shape():
    out=m.analyze_text("A가 말했다. B가 말했다. A가 말했다.")
    assert isinstance(out,dict)
